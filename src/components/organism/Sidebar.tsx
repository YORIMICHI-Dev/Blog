import CategoryList from "../molecules/CategoryList";
import ProfileCard from "../molecules/ProfileCard";
import TwitterWidgets from "../molecules/TwitterWidgets";

const Sidebar = () => {
    return (
        <div>
            <div className="mt-10 space-y-20">
                <ProfileCard />
                <TwitterWidgets />
                <CategoryList />
            </div>
        </div>
    );
}

export default Sidebar;