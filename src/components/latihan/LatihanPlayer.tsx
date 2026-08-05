'use client'

import { useState } from 'react'
import { CheckCircle2, XCircle, RotateCcw, ChevronLeft, ChevronRight, Trophy, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface LatihanQuestion {
  question: string
  options: string[]
  answerIndex: number
  explanation: string
}

interface LatihanPlayerProps {
  title: string
  questions: LatihanQuestion[]
  onFinish?: (score: number, total: number) => void
}

type Phase = 'playing' | 'result'

export function LatihanPlayer({ title, questions, onFinish }: LatihanPlayerProps) {
  const [phase, setPhase] = useState<Phase>('playing')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    questions.map(() => null)
  )
  const [selected, setSelected] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const total = questions.length
  const score = answers.filter((a, i) => a === questions[i].answerIndex).length
  const answeredCount = answers.filter((a) => a !== null).length

  const handleSelect = (optionIndex: number) => {
    if (selected !== null) return
    setSelected(optionIndex)
    setShowExplanation(true)
  }

  const handleNext = () => {
    const nextAnswers = [...answers]
    nextAnswers[current] = selected
    setAnswers(nextAnswers)

    if (current + 1 < total) {
      setCurrent(current + 1)
      setSelected(null)
      setShowExplanation(false)
    } else {
      setPhase('result')
      onFinish?.(score, total)
    }
  }

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1)
      setSelected(answers[current - 1])
      setShowExplanation(answers[current - 1] !== null)
    }
  }

  const restart = () => {
    setPhase('playing')
    setCurrent(0)
    setAnswers(questions.map(() => null))
    setSelected(null)
    setShowExplanation(false)
  }

  const question = questions[current]
  const isLast = current + 1 === total
  const percentage = Math.round((score / total) * 100)

  if (phase === 'result') {
    return (
      <div className="rounded-2xl bg-white dark:bg-gray-900 border border-violet-100 dark:border-violet-900 p-8 text-center">
        <div className="mx-auto mb-6 w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30">
          <Trophy className="h-10 w-10 text-white" />
        </div>

        <h2 className="text-2xl font-bold mb-2">Latihan Selesai!</h2>
        <p className="text-muted-foreground mb-6">{title}</p>

        <div className="text-5xl font-bold gradient-text mb-2">
          {score}/{total}
        </div>
        <p className="text-muted-foreground mb-8">
          Skor kamu {percentage}% —{' '}
          {percentage >= 80
            ? 'Luar biasa! Kamu menguasai materi ini.'
            : percentage >= 60
              ? 'Bagus! Sedikit lagi sempurna.'
              : 'Jangan menyerah, baca kembali materinya lalu coba lagi.'}
        </p>

        <div className="w-full max-w-md mx-auto bg-muted/50 rounded-full h-3 mb-8">
          <div
            className={cn(
              'h-3 rounded-full transition-all',
              percentage >= 80
                ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                : percentage >= 60
                  ? 'bg-gradient-to-r from-yellow-500 to-amber-500'
                  : 'bg-gradient-to-r from-red-500 to-rose-500'
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 mb-8 text-left">
          {questions.map((q, i) => {
            const userAnswer = answers[i]
            const correct = userAnswer === q.answerIndex
            return (
              <div
                key={i}
                className={cn(
                  'flex items-start gap-3 p-4 rounded-xl border',
                  correct
                    ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900'
                    : 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900'
                )}
              >
                {correct ? (
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                )}
                <div className="text-sm">
                  <p className="font-medium">{i + 1}. {q.question}</p>
                  {!correct && (
                    <p className="text-muted-foreground mt-1">
                      Jawaban benar: <span className="font-medium text-foreground">{q.options[q.answerIndex]}</span>
                    </p>
                  )}
                  <p className="text-muted-foreground mt-1 text-xs">{q.explanation}</p>
                </div>
              </div>
            )
          })}
        </div>

        <button
          onClick={restart}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold hover:from-violet-600 hover:to-fuchsia-600 transition-all"
        >
          <RotateCcw className="h-4 w-4" />
          Ulangi Latihan
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-2xl bg-white dark:bg-gray-900 border border-violet-100 dark:border-violet-900 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-violet-100 dark:border-violet-900">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold">{title}</h2>
          <span className="text-sm text-muted-foreground">
            Terjawab {answeredCount}/{total}
          </span>
        </div>
        <div className="flex gap-1.5">
          {questions.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (answers[i] !== null || i === current) {
                  setCurrent(i)
                  setSelected(answers[i])
                  setShowExplanation(answers[i] !== null)
                }
              }}
              className={cn(
                'h-2 flex-1 rounded-full transition-colors',
                i === current
                  ? 'bg-violet-600'
                  : answers[i] !== null
                    ? 'bg-violet-300 dark:bg-violet-700'
                    : 'bg-muted'
              )}
              aria-label={`Ke soal ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <div className="p-6 sm:p-8">
        <p className="text-xs font-medium text-muted-foreground uppercase mb-3">
          Soal {current + 1} dari {total}
        </p>
        <h3 className="text-lg font-semibold mb-6">{question.question}</h3>

        <div className="space-y-3">
          {question.options.map((option, optionIndex) => {
            const isSelected = selected === optionIndex
            const isCorrect = optionIndex === question.answerIndex
            const showState = showExplanation

            return (
              <button
                key={optionIndex}
                onClick={() => handleSelect(optionIndex)}
                disabled={showState}
                className={cn(
                  'w-full text-left flex items-start gap-3 p-4 rounded-xl border transition-all',
                  !showState && 'hover:border-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/20',
                  showState && isCorrect && 'border-green-500 bg-green-50 dark:bg-green-950/20',
                  showState && isSelected && !isCorrect && 'border-red-500 bg-red-50 dark:bg-red-950/20',
                  !showState && 'border-violet-100 dark:border-violet-900 bg-white dark:bg-gray-900',
                  showState && !isSelected && !isCorrect && 'border-violet-100 dark:border-violet-900 opacity-60'
                )}
              >
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full border text-xs font-semibold shrink-0 mt-0.5">
                  {String.fromCharCode(65 + optionIndex)}
                </span>
                <span className="text-sm">{option}</span>
                {showState && isCorrect && <CheckCircle2 className="h-5 w-5 text-green-600 ml-auto shrink-0" />}
                {showState && isSelected && !isCorrect && <XCircle className="h-5 w-5 text-red-600 ml-auto shrink-0" />}
              </button>
            )
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className="mt-6 p-4 rounded-xl bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-900 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-violet-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium mb-1">
                {selected === question.answerIndex ? 'Benar!' : 'Belum tepat'}
              </p>
              <p className="text-sm text-muted-foreground">{question.explanation}</p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-6 border-t border-violet-100 dark:border-violet-900">
        <button
          onClick={handlePrev}
          disabled={current === 0}
          className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Sebelumnya
        </button>
        <button
          onClick={handleNext}
          disabled={selected === null}
          className="inline-flex items-center gap-1 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-semibold hover:from-violet-600 hover:to-fuchsia-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          {isLast ? 'Lihat Hasil' : 'Lanjut'}
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
