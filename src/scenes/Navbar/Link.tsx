import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "../shared/type";
type Props = {
    page: string;
selectedPage: string,
setSelectedPage: (value: SelectedPage) => void;
}

export default function Link({page, selectedPage, setSelectedPage}: Props) {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <div>
        <AnchorLink href={`${lowerCasePage}`} onClick={()=> setSelectedPage(lowerCasePage)} className={`${selectedPage === lowerCasePage ?  'text-primary-500' : ''}transition duration-500 hover:text-primary-300 `}>
            {
                page
            }
        </AnchorLink>
    </div>
  )
}