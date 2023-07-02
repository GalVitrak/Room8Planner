import crypto from "crypto";

const salt = "TommyChicknez";

// a function to encrypt passwords
export function hash(plainText: string):any {
  if (!plainText) return null;

  // Hash with salt:
  const hashedText = crypto
    .createHmac("sha512", salt)
    .update(plainText)
    .digest("hex");

  return hashedText;
}
