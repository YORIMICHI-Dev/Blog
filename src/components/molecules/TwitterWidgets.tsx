import { Timeline } from "react-twitter-widgets";


const TwitterWidgets = () => {
    return (
        <div className="rounded-lg shadow-md">
            <Timeline
                dataSource={{ sourceType: "profile", screenName: "YORIMICHI_Dev" }}
                options={{ lang: "jp", }}
            />            
        </div>

    );
}

export default TwitterWidgets;