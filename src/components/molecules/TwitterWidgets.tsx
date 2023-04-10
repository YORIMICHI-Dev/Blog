import { Timeline } from "react-twitter-widgets";


const TwitterWidgets = () => {
    return (
        <Timeline
            dataSource={{ sourceType: "profile", screenName: "YORIMICHI_Dev" }}
            options={{ lang: "en", width: "400", height: "600" }}
        />
    );
}

export default TwitterWidgets;