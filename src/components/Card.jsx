import { AnimatePresence, motion } from "framer-motion";
const Card = ({direction, current ,item ,data}) => {
    return (
        <div className="w-full max-w-2xl relative px-2 sm:px-0" style={{ height: 420 }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ x: direction * 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction * -300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="glow-border-wrapper w-full absolute inset-x-0"
            >
              <div className="glow-border-inner p-5 sm:p-8 flex flex-col" style={{ minHeight: 370 }}>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono text-muted-foreground">
                    {current + 1} / {data.length}
                  </span>
                  <h2 className="text-base sm:text-xl font-semibold text-foreground text-center">
                    {item.title}
                  </h2>
                  <div className="w-10" />
                </div>

                <div className="space-y-4 flex-1">
                  {item.solutions.map((sol, i) => (
                    <div key={i} className="space-y-1">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        Solution {i + 1}
                      </span>
                      <pre className="code-block rounded-lg p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm font-mono text-foreground leading-relaxed whitespace-pre-wrap">
                        {sol}
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
    )
}

export default Card;