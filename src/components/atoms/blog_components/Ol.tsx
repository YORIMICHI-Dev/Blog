const Ol = (props: { children?: React.ReactNode }) => {
    return (
        <ol className="bg-white my-4 text-xl">
            {props.children}
        </ol>
    );
};


export default Ol;