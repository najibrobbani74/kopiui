import ComponentPage from "./[component]/page";

export default async function Page() {
  return ComponentPage({ params: Promise.resolve({ component: "accordion" }) });
}