
type Props = {
    children: React.ReactNode;
}

const HText = ({children}: Props) => {
  return (
    <div>
          <h1 className="basis-3/5 font-mono text-3xl font-bold">{children}</h1>
        </div>
  )
}

export default HText