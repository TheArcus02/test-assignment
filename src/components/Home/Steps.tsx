import StepItem from './StepItem'

const Steps = () => {
  return (
    <div className='grid grid-cols-3'>
      <StepItem
        number={1}
        fullfilled={true}
        title={
          <>
            Generate <br /> Image
          </>
        }
        first={true}
      />
      <StepItem
        number={2}
        fullfilled={false}
        title={
          <>
            Choose your <br /> product
          </>
        }
      />
      <StepItem
        number={3}
        fullfilled={false}
        title='Order'
        last={true}
      />
    </div>
  )
}

export default Steps
