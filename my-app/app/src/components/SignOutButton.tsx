import signOutUser from "./signOutUser"
 
interface signOutProps {
    handleSubmit: () => Promise<void>
    loading: boolean
}

export default async function SingOutButton({handleSubmit, loading}: signOutProps) {

    const user = await signOutUser()

  return (user.user && <div onClick={handleSubmit} className="bg-rose-600 px-5 py-3 absolute top-5 right-5 text-white border border-transparent hover:cursor-pointer hover:bg-transparent hover:border hover:border-rose-600">
      {loading ? "Signing Out" : "Sign Out"}
    </div>
)
}
