import React from 'react';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

interface MenuItem {
  label: string;
  path: string;
  hasSubmenu?: boolean;
}

const menuItems: MenuItem[] = [
  { label: 'Home', path: 'home' },
  { label: 'Tyohaar Collections', path: 'collections', hasSubmenu: true },
  { label: 'Shop', path: 'products' },
  { label: 'Collections', path: 'collections' },
  { label: 'Sarees', path: 'sarees' },
  { label: 'Blouse', path: 'blouse' },
  { label: 'Suit', path: 'suits' },
  { label: 'Dupatta', path: 'dupattas' },
  { label: 'Stole', path: 'stoles' },
  { label: 'Fabrics', path: 'fabrics' },
  { label: 'Jewellery', path: 'jewellery' },
];

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  if (!isOpen) return null;

  const handleLinkClick = (pageId: string) => {
    onNavigate(pageId);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}
      
      {/* Side Menu */}
      <div className={`fixed top-0 left-0 h-full w-80 sm:w-96 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } shadow-2xl`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 bg-red-50">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
              <h2 className="text-xl sm:text-2xl font-serif text-red-800 tracking-wider">MallikaRAJ</h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-red-100 rounded-full transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center text-red-700"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Search Bar */}
          <div className="p-4 sm:p-6 border-b border-gray-100 bg-gradient-to-r from-red-50 to-orange-50">
            <div className="relative">
              <input
                type="text"
                placeholder="Search traditional wear..."
                className="w-full pl-10 pr-4 py-3 sm:py-4 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base min-h-[44px] bg-white"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto bg-white">
            <div className="py-2 sm:py-4">
              {menuItems.map((item: MenuItem, index: number) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(item.path)}
                  className="w-full text-left px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-gray-700 hover:bg-red-50 hover:text-red-800 transition-colors duration-200 border-b border-gray-50 last:border-b-0 min-h-[44px] flex items-center justify-between group"
                >
                  <span className="font-medium tracking-wide">{item.label}</span>
                  {item.hasSubmenu && (
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="border-t border-gray-200 p-4 sm:p-6 bg-gradient-to-r from-red-50 to-orange-50">
            <button 
              onClick={() => handleLinkClick('sign-in')}
              className="w-full bg-red-700 text-white py-3 sm:py-4 text-sm sm:text-base font-medium hover:bg-red-800 transition-colors duration-200 rounded-lg uppercase tracking-wide min-h-[44px] shadow-lg"
            >
              Sign In
            </button>
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-600">
                Celebrating Indian Heritage
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;