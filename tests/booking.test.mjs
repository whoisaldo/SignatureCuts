import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import ts from "typescript";

const source = readFileSync(new URL("../src/lib/booking.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext },
});
const { composeMessage, getSMSURL } = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`
);
const phone = "+14138854013";
const message = composeMessage({
  name: "José, Jr.",
  barber: "Steve",
  service: "Haircut & beard",
  date: "October 24, 2026",
  time: "15:30",
  notes: "50% fade? #2 + scissors; thanks ✂️",
});

test("Android keeps one recipient and the complete booking in the body", () => {
  const url = new URL(getSMSURL(phone, message));
  assert.equal(url.protocol, "sms:");
  assert.equal(url.pathname, phone);
  assert.deepEqual([...url.searchParams.keys()], ["body"]);
  assert.equal(url.searchParams.get("body"), message);
  assert.equal(url.hash, "");
  assert.ok(!url.pathname.includes(","));
});

test("iOS keeps its body separator with fully encoded booking text", () => {
  const url = getSMSURL(phone, message, true);
  const prefix = `sms:${phone}&body=`;
  assert.ok(url.startsWith(prefix));
  assert.equal(decodeURIComponent(url.slice(prefix.length)), message);
  assert.ok(!url.slice(prefix.length).includes("&"));
  assert.ok(!url.includes("#"));
});

test("empty messages still address only the selected barber", () => {
  assert.equal(getSMSURL(phone, ""), `sms:${phone}?body=`);
  assert.equal(getSMSURL(phone, "", true), `sms:${phone}&body=`);
});
