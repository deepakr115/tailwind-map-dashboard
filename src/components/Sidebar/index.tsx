import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUp, Email } from '../../common/Icons';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
  updateChartData: () => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen, updateChartData }: SidebarProps) => {
  const [selected, setSelected] = useState(0);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target)
      ) {
        return;
      }

      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  const handleItemClick = (index: number) => {
    if (selected === index) {
      return;
    }
    setSelected(index)
    updateChartData();
  }

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-1 lg:mt-9">
          <div className="mt-18">
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              Sample Stack
            </h3>
            <div
              className="group relative flex flex-col items-center gap-1 rounded-sm font-medium text-bodydark1 duration-300 ease-in-out"
            >
              {/* Sidebar items */}
              {Array(7).fill(1).map((value, index) => {
                let classes = `flex flex-col w-full p-4 ${selected === index ? "bg-teal-900" : "bg-teal-950"} gap-1 cursor-pointer dark:hover:bg-teal-900`;
                return <div
                  key={index}
                  className={classes}
                  onClick={() => handleItemClick(index)}
                >
                  <div className="flex w-full justify-between items-center">
                    <div className="flex gap-1">
                      <input type='checkbox' />
                      <button className="px-1 text-xs bg-slate-500 text-white rounded shadow-sm opacity-100"><ArrowUp fill="black" /> F'Cast Stab.</button>
                      <button className="px-1 text-xs bg-slate-500 text-white rounded shadow-sm opacity-100"><ArrowDown fill="black" /> F'Cast Acc.</button>
                    </div>
                    <Email fill="teal" />
                  </div>
                  <span className="text-xs ml-4">Sample Stack</span>
                </div>
              })}

            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
