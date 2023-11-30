import Users from "@/app/users";
import Companies from "@/app/companies";
import { Suspense} from "react";

export default function Page(){
    return <div>
        <div style={{display: 'flex'}}>
            <Suspense fallback={<div>Loading users...</div>} >
        <Users />
            </Suspense>
            <Suspense fallback={<div>Loading companies...</div>}>
           <Companies />
            </Suspense>
        </div>
    </div>
}