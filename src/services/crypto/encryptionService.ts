import crypto from "crypto";

export class EncryptionService {
  // Hardcoded key
  private readonly keyHex =
    "FFFFFFFF00000000FFFFFFFF000000006E7900002D5700004F3F2D5600000000";

  constructor() {
  }

  public encrypt(data: string): Buffer {
    const cipher = crypto.createCipheriv(
      "BF-ECB",
      Buffer.from(this.keyHex, "hex"),
      null
    );
    let crypted = cipher.update(data, "utf8", "hex");
    crypted += cipher.final("hex");
    return Buffer.from(crypted, "hex");
  }
}
