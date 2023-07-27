import {BuyerForm} from "@/components/buyers/BuyerForm"
import ProtectedContent from "components/auth/ProtectedContent"
import {appPermissions} from "config/app-permissions.config"

/* This declare the page title and enable the breadcrumbs in the content header section. */
export async function getStaticProps() {
  return {
    props: {
      header: {
        title: "Create a new buyer",
        metas: {
          hasBreadcrumbs: true
        }
      },
      revalidate: 5 * 60
    }
  }
}

function ProtectedNewBuyerUserPage() {
  return (
    <ProtectedContent hasAccess={appPermissions.BuyerManager}>
      <BuyerForm />
    </ProtectedContent>
  )
}

export default ProtectedNewBuyerUserPage
