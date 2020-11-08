import dynamic from 'next/dynamic'
const NewSensor = dynamic(import('../../components/sensors/NewSensor'), { ssr: false })

export default NewSensor