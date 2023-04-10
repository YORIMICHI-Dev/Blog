interface Props {
    children: string
}

const H3 = ({children}: Props) => {
    return (
        <div className="relative">
            <h3 className="text-xl font-semibold mb-4">
                {children}
            </h3>
        </div>
    );
}

export default H3;