import { BookOpenIcon, ViewListIcon, MusicNoteIcon, CollectionIcon, CalendarIcon, AnnotationIcon, DocumentSearchIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';

const tabs = [
  { name: "Moʻolelo", href: '/olelo/nawahi-moolelo', icon: AnnotationIcon, current: false },
  { name: "Kaʻina Manawa", href: '/olelo/nawahi-kainamanawa', icon: CalendarIcon, current: false },
  { name: "Haʻawina", href: '/olelo/nawahi-haawina', icon: CollectionIcon, current: true },
  { name: "Mele", href: '/olelo/nawahi-mele', icon: MusicNoteIcon, current: false },
  { name: "Puke", href: '/olelo/nawahi-puke', icon: BookOpenIcon, current: false },
  { name: "Papa Kuhikuhi", href: '/olelo/nawahi-kuhikuhi', icon: ViewListIcon, current: false },
  { name: "Waihona", href: '/olelo/nawahi-waihona', icon: DocumentSearchIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function handleChange(e, router) {
    const selectedTab = tabs.find(tab => tab.name === e.target.value);
    router.push(selectedTab.href);
}

export default function Submenu() {
  const router = useRouter();
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full focus:ring-beige-default focus:border-beige-default border-gray-300 rounded-md"
          defaultValue={tabs.find((tab) => tab.current).name}
          onChange={(e) => handleChange(e, router)}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b bg-white border-gray-200">
          <nav className="-mb-px flex flex-wrap justify-center space-x-4" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link href={tab.href}>
                <a
                  key={tab.name}
                  className={classNames(
                    tab.current
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-beige-default hover:border-beige-default',
                    'group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm leading-4'
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  <div className="flex-col mx-auto">
                    <tab.icon
                      className={classNames(
                        tab.current ? 'text-primary' : 'text-gray-400 group-hover:text-beige-default',
                        'mx-auto h-4 w-4'
                      )}
                      aria-hidden="true"
                    />
                    <span>{tab.name}</span>
                  </div>
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
