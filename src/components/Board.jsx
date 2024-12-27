import circle from "../assets/circle.svg";
import cross from "../assets/cross.svg";

export function Board() {
    const boardArray = [
        { id: 1, value: 1, border: "border-r-4 border-b-4" },
        { id: 2, value: 0, border: "border-r-4 border-b-4 border-l-4" },
        { id: 3, value: 0, border: "border-l-4 border-b-4" },
        { id: 4, value: 0, border: "border-r-4 border-b-4 border-t-4" },
        { id: 5, value: 0, border: "border-r-4 border-b-4 border-t-4 border-l-4" },
        { id: 6, value: 0, border: "border-l-4 border-b-4 border-t-4" },
        { id: 7, value: 0, border: "border-r-4 border-t-4" },
        { id: 8, value: 0, border: "border-r-4 border-t-4 border-l-4" },
        { id: 9, value: 0, border: "border-l-4 border-t-4" }
    ];

    return (
        <div className="flex flex-wrap w-5/12 mx-auto my-10">
            {boardArray.map((item) => (
                <button
                    key={item.id}
                    className={`${item.border} p-8 border-yellow-400 cursor-pointer w-4/12`}
                >
                    <img className="w-10/12 mx-auto" src={item.value === 1 ? cross : circle} alt="" />
                </button>
            ))}
        </div>
    );
}