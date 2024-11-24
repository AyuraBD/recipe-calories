import React from "react";
import SideRecipe from "./SideRecipe";

const Sidebar = ({ wantToCook }) => {
  
  
  return (
    <div className="border-2 rounded-md p-3 h-full lg:w-1/3 sm:w-3/3 ">
      <div>
        {/* Added for Cooking */}
        <h3 className="py-3 border-b-2 text-[20px] font-semibold text-center mb-2">
          Want to Cook: 0{wantToCook.length}
        </h3>
        <table className="table-auto mb-8 w-full">
          <thead>
            <tr>
              <th className="p-3 text-start">Name</th>
              <th className="p-3 text-start">Time</th>
              <th className="p-3 text-start">Calories</th>
            </tr>
          </thead>
          <tbody>
            {
              wantToCook.map(toCook => <SideRecipe key={toCook.id} toCook={toCook}></SideRecipe>)
            }
          </tbody>
        </table>

        {/* Currently Cooking */}
        <h3 className="py-3 border-b-2 text-[20px] font-semibold text-center mb-2">
          Currently Cooking: 0{wantToCook.length}
        </h3>
        <table className="table-fixed mb-8">
          <thead>
            <tr>
              <th className="p-3 text-start">Name</th>
              <th className="p-3 text-start">Time</th>
              <th className="p-3 text-start">Calories</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;
