import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button styles="rounded-lg" />
      <Button styles="rounded-sm" />
      <Button styles="rounded-full" />
    </div>
  )
}
export default Landing