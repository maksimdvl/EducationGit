const App = () => {
    const [test, settext] = useState(false)
    const [reset, setReset] = useState(false)
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Screen text={text} reset={reset} setReset={setReset} />
            </div>
        </ThemeProvider>
    )
}

export default App