import { Link } from 'react-router-dom';
import DropdownUser from './DropdownUser';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu';

const Header = (props: {
    sidebarOpen: string | boolean | undefined;
    setSidebarOpen: (arg0: boolean) => void;
}) => {
    return (
        <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
            <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
                <div className="flex items-center gap-2 sm:gap-4">
                    <Link to="/">
                        <HamburgerMenu open={false} setOpen={props.setSidebarOpen} />
                    </Link>

                    <Link className="block flex-shrink-0" to="/">
                        Webapp
                    </Link>
                </div>

                <div className="flex items-center gap-3 2xsm:gap-7">
                    <DropdownUser />
                </div>
            </div>
        </header>
    );
};

export default Header;
