import { CreateAccountForm } from "../blocks/CreateAccountForm";
import { OnboardingBlock } from "../blocks/OnboardingBlock";
import { PageBody, PageHeading } from "../layout/AppLayout";
import { useUser } from "../model/user";
import { h2ClassName } from "../reusable/styles";

export function AccountLoginPage() {
  const user = useUser()


  if (user) {
    return <>
      <PageHeading>Logged in successfully</PageHeading>
      <PageBody>
        <p>
          <h2 className={h2ClassName}>{user.email}</h2>
        </p>
        <OnboardingBlock />

      </PageBody>
    </>
  }

  return <>
    <PageHeading>Login</PageHeading>
    <PageBody>
      <CreateAccountForm />
    </PageBody>
  </>
}