import { EmailAuthType } from "src/components/pages/AuthPage/components/AuthArea/types"
import { EmailAuthData } from "../../../types"
import { IMutationHookRequestFunctionProps } from "src/inversions/queryMaker"

export interface IEmailAuthRequestRequestBody
  extends IMutationHookRequestFunctionProps {
  data: EmailAuthData
  authType: EmailAuthType
}
