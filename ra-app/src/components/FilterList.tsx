import { FilterList,FilterListItem,FilterLiveSearch } from "react-admin";
import {Card,CardContent} from "@mui/material";
import CategoryIcon from "@mui/icons-material/LocalOffer";

export const PosterFilterSidebar=() => (
    <Card sx={{order:-1,mr:"24px",mt:"48px",width:250}}>
        <CardContent>
            <FilterLiveSearch/>
            <FilterList label="Categories" icon={<CategoryIcon/>}>
                <FilterListItem label="animals" value={{category_id:1}} />
            </FilterList>
        </CardContent>
    </Card>
);
