import React, { Fragment, useCallback, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Picker, { PickerValue } from 'react-mobile-picker'

function getDayArray(year: number, month: number) {
  const dayCount = new Date(year, month, 0).getDate()
  return Array.from({ length: dayCount }, (_, i) => String(i + 1).padStart(2, '0'))
}

export default function ModalPicker() {
  const [isOpen, setIsOpen] = useState(false)
  const [pickerValue, setPickerValue] = useState<PickerValue>({
    year: '1989',
    month: '08',
    day: '12',
  })

  const handlePickerChange = useCallback((newValue: PickerValue, key: string) => {
    if (key === 'day' ) {
      setPickerValue(newValue)
      return
    }

    const { year, month } = newValue
    const newDayArray = getDayArray(Number(year), Number(month))
    const newDay = newDayArray.includes(newValue.day as string) ? newValue.day : newDayArray[newDayArray.length - 1]
    setPickerValue({ ...newValue, day: newDay })
  }, [])

  return (
    <>
      <p>oi</p>
    </>
  )
}