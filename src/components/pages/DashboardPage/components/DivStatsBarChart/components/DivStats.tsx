import { NumberInBlock } from "@core/components"

const DivStats = () => {
  return (
    <section className="flex justify-between mb-10">
      <PayProgressVisualization />
      <BestPayersList />
    </section>
  )
}

export default DivStats