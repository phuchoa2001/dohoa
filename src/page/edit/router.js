import TaocotFacebook from "./taocotfacebook";
import Bienhinhanhthanhhinhve from "./bienhinhanhthanhhinhve";
import TaocotFacebook2 from './taocotfacebook2'
const router = [
    {
        path: "/bienhinhanhthanhhinhve3",
        exact: true,
        mani: () => <Bienhinhanhthanhhinhve />
    },
    {
        path: "/taocotfacebook",
        exact: true,
        mani: () => <TaocotFacebook />
    },
    {
        path: "/taocotfacebook2",
        exact: true,
        mani: () => <TaocotFacebook2 />
    },
]
export default router;