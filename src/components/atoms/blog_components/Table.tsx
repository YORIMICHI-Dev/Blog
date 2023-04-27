interface Table {
    columnName: string[],
    values: string[][],
}

const Table = ({ columnName, values }: Table) => {
    return (
        <div className="w-full p-6 bg-white rounded-lg md:my-14 my-8">
            <table className="w-full table-fixed border-collapse text-left">
                <thead>
                    <tr>
                        {columnName.map((header, index) => {
                            return (
                                <th key={index} className="px-4 py-2 border-b-2 border-gray-200 text-xl bg-gray-200 font-semibold">{header}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {values.map((value, index) => {
                        return (
                            <tr key={index}>
                                {value.map((cell, index) => {
                                    return (
                                        <td key={index} className="px-4 py-2 border-b-2 border-gray-200 text-md font-semibold">{cell}</td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;