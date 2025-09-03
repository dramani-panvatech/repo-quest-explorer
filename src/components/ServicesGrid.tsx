import { Leaf, Brain, Clock, Ambulance } from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Meaningful Use Compliance",
    description: "Becoming meaningful use compliant can have a positive impact on your practice. Improving transparency and efficiency, engaging patients and maintaining the privacy and security of all health information are just a few of the benefits you can enjoy using PatientClick Certified EHR.",
  },
  {
    icon: Brain,
    title: "Process Improvement",
    description: "Let us improve your practice performance. While evaluating the overall workflow of the office we will help optimize existing processes to increase productivity and revenue.",
  },
  {
    icon: Clock,
    title: "Revenue Cycle Management",
    description: "PatientClick's Revenue Cycle Management allows physician practices to utilize secured web-based technology to improve patient collections and improve practice bottomline.",
  },
  {
    icon: Ambulance,
    title: "Go-Live Assistance",
    description: "Our highly trained Implementation Specialists are available 24/7 to assist with the go live process. Our effective training specialists coupled with other knowledgeable team members makes for a smooth transition.",
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="flex items-start space-x-4 p-6 hover:bg-gray-50 transition-colors duration-300"
            >
              {/* Blue square icon container */}
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className={`text-lg font-semibold mb-3 ${
                  service.title === "Revenue Cycle Management" ? "text-gray-600" : "text-blue-600"
                }`}>
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 