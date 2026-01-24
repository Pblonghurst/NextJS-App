'use client'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { increment } from '@/store/slices/counterSlice'
import { Button } from "@/components/ui/Button";

export const Counter = () => {
    // Get the counter value from Redux state
    const count = useAppSelector((state) => state.counter.value)
    // Get the dispatch function to trigger actions
    const dispatch = useAppDispatch()

    return (
        <div className="mb-8">
            <p>Counter: {count}</p>
            <Button text="Increment +1" onClick={() => dispatch(increment())} />
        </div>
    )
}

