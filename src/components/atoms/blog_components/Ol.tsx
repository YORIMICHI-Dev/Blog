const Ol = (props: { children?: React.ReactNode }) => {
    return (
        <ol className="bg-white my-4">
            {props.children}
        </ol>
    );
};


export default Ol;