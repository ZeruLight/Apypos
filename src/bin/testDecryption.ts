import crypto from "crypto";

const key = "FFFFFFFF00000000FFFFFFFF000000006E7900002D5700004F3F2D5600000000";
const encryptedData = Buffer.from(
  "5da2756b97c4c33317be24af162b8e33565a9d50aa95511688374fc0b3c042f7",
  "hex",
);

function decrypt(data: Buffer): string {
  const decipher = crypto.createDecipheriv(
    "bf-ecb",
    Buffer.from(key, "hex"),
    null,
  );

  // Disable auto padding
  decipher.setAutoPadding(false);

  const decryptedBuffer = Buffer.concat([
    decipher.update(data),
    decipher.final(),
  ]);
  return decryptedBuffer.toString("utf8").replace(/\x00/g, ""); // remove null bytes
}

console.log(decrypt(encryptedData));
