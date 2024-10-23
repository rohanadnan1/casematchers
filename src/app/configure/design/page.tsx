interface PageProps {
    searchParams: {
        [key: string]: string | undefined | string[]
    }
}

const Page = async ({searchParams}: PageProps) => {
    const {id} = searchParams
    return(
        <div>
            <h1>Page</h1>
            <p>id: {id}</p>
        </div>
    )
}

export default Page