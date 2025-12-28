import Banner from "@/components/post-pilot/Banner"
import Brand from "@/components/post-pilot/Brand"
import Work from "@/components/post-pilot/Work";
import { Inter, Covered_By_Your_Grace } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const coveredByYourGrace = Covered_By_Your_Grace({ 
  weight: '400', 
  subsets: ['latin'] 
});
export default async function PostPilot() {

    return (
        <div className="font-inter">
            <Banner/>
            <Brand/>
            <Work/>
        </div>
    );
}
