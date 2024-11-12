import { createBrowserRouter } from "react-router-dom"
import Home from "./views/Home";
import RootLayout from "./views/RootLayout";
import ListItems from "./views/ListItems";
import CreateItem from "./views/CreateItem";
import ShowItem from "./views/ShowItem";
import UpdateItem from "./views/UpdateItem";
import ItemsLayout from "./views/Layout";


//localhost:3000
//localhost:3000/items
const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout/>,
    children: [
        {index: true, element: <Home/>},
        {path: "items", element: <ItemsLayout/>,
            children: [
                {index: true, element: <ListItems/> },
                {path: "new", element: <CreateItem/> },
                {path: ":id", element: <ShowItem/> },
                {path: ":id/update", element: <UpdateItem/> },
            ]
        }
    ]
}])


export default router;