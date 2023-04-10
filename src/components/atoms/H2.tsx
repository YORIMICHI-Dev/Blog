interface Props {
    children: string
}

const H2 = ({children}: Props) => {
    return (
        <div className="relative">
            <h2 className="text-2xl font-semibold mb-4">
                {children}
            </h2>
        </div>
    );
}

export default H2;