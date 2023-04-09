interface Props {
    children: string;
}

const PageH1 = ({children}: Props) => {
    return (
        <h1 className="text-5xl border-b-4 p-5 font-bold">
            {children}
        </h1>
    );
}

export default PageH1;