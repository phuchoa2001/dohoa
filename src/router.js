import All from "./page/all";
import Edit from "./page/edit";
const router = [
  {
    path: "/",
    exact: true,
    mani: () => <All />
  },
  {
    path: "/edit",
    exact: false,
    mani: () => <Edit />
  },
  {
    path: "/:route",
    exact: false,
    mani: () => <All />
  },
]
export default router;
