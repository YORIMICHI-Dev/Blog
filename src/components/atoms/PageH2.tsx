interface Props {
    children: string;
}

const PageH2 = ({children}: Props) => {
    return (
        <h2 className="flex justify-center text-3xl p-5 m-5 font-bold">
            {children}
        </h2>
    );
}

export default PageH2;