import FeatureCard from './components/FeatureCard'
import './App.css'

function App() {
  const features = [
    { id: 'z1', title: 'Свежесть', description: 'Сорвано прямо с градки.' },
    { id: 'z2', title: 'Чистота', description: 'Выращенно без химикатов.' },
    { id: 'z3', title: 'Полезность', description: 'Большие кол-ва витаминов.' }]
  return (
    <>
      <div className="container">
        {features.map(feature =>(<FeatureCard key={feature.id} title={feature.title} description={feature.description}/>))}
      </div>
    </>
  )
}
export default App