import type { Certification } from "../types/certifications"

export function certificationStatus({ status }: Certification) {
  if (status === "reported-earned")
    return "Reported earned · Public credential verification pending"
  if (status === "reported-exam-pass")
    return "Reported exam pass · Expert credential issuance not confirmed"
  return ""
}
