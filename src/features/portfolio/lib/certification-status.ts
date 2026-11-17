import type { CertificationCard } from "../types/certifications"

export function certificationStatus({
  status,
  examStatus,
  verified,
}: CertificationCard) {
  if (status === "expired") return "Expired"
  if (examStatus === "passed" && status === "pending_verification")
    return "Reported exam pass · Credential issuance not confirmed"
  return verified === true
    ? "Verified credential"
    : "Listed on LinkedIn · Personal verification pending"
}
