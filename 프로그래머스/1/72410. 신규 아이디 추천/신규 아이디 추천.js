function solution(str) {
  const baseId = str
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/, "");

  return baseId.length < 3
    ? baseId.padEnd(3, baseId[baseId.length - 1])
    : baseId;
}