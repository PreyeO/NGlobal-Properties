import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { propertyData } from "@/data";
import PropertyCard from "@/components/ui/property-card";
import type { PropertyCategory, TabOption } from "@/types";

// Define property category type

export default function Gallery() {
  const tabs: TabOption[] = [
    "All",
    ...(Object.keys(propertyData) as PropertyCategory[]),
  ];
  const [activeTab, setActiveTab] = useState<TabOption>("All");

  // Get properties for the selected tab
  const getProperties = () => {
    if (activeTab === "All") {
      return Object.values(propertyData).flat();
    }
    return propertyData[activeTab] || [];
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Tabs
          value={activeTab}
          onValueChange={(value: string) => setActiveTab(value as TabOption)}
          className=""
        >
          {/* Tabs List */}
          <TabsList className="mb-12 justify-center gap-4 bg-white/50 backdrop-blur-md rounded-xl p-1 shadow-md w-fit mx-auto">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="px-6 py-2 text-lg font-semibold rounded-lg
                   data-[state=active]:bg-[#4B0082] 
                   data-[state=active]:text-white 
                   hover:bg-[#4B0082]/20 
                   transition-all duration-200"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tabs Content */}
          <TabsContent value={activeTab}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getProperties().map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
