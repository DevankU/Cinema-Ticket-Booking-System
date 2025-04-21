import javax.swing.*;
import javax.swing.border.*;
import java.awt.*;
import java.awt.event.*;
import java.util.*;
import java.text.SimpleDateFormat;

public class MovieTicketBookingSystem {
    // Main frame
    private JFrame frame;
    
    // Components
    private JPanel headerPanel, mainPanel, movieListPanel, featuredPanel;
    private JButton homeButton, moviesButton, categoriesButton, signInButton, searchButton, profileButton;
    private JComboBox<String> categoriesComboBox;
    private JToggleButton nowShowingButton, comingSoonButton;
    private CardLayout cardLayout;
    private JPanel cardsPanel;
    
    // Data
    private ArrayList<Movie> movies;
    private ArrayList<Movie> featuredMovies;
    
    // Constants
    private final Color DARK_BG = new Color(18, 18, 18);
    private final Color HEADER_BG = new Color(24, 24, 24);
    private final Color BLUE_ACCENT = new Color(44, 116, 255);
    private final Color CARD_BG = new Color(32, 32, 40);
    private final Color TEXT_COLOR = Color.WHITE;
    private final Color SECONDARY_TEXT = new Color(170, 170, 170);
    private final Font TITLE_FONT = new Font("Arial", Font.BOLD, 24);
    private final Font HEADER_FONT = new Font("Arial", Font.BOLD, 18);
    private final Font REGULAR_FONT = new Font("Arial", Font.PLAIN, 14);
    private final Font SMALL_FONT = new Font("Arial", Font.PLAIN, 12);
    
    public MovieTicketBookingSystem() {
        initializeData();
        initializeUI();
    }
    
    private void initializeData() {
        // Initialize movie data
        movies = new ArrayList<>();
        featuredMovies = new ArrayList<>();
        
        // Add sample movies with their details
        Movie movie1 = new Movie("Interstellar: Beyond Time", "Sci-Fi", 165, 
                "Inside Christopher Nolan's sci-fi epic", "/images/interstellar.jpg");
        
        Movie movie2 = new Movie("The Dark Knight Returns", "Action", 150, 
                "Deluxe Edition", "/images/batman.jpg");
        
        Movie movie3 = new Movie("Eternal Sunshine", "Drama", 130, 
                "of the spotless mind", "/images/eternal_sunshine.jpg");
        
        Movie movie4 = new Movie("Mystic River", "Thriller", 135, 
                "we bury our sins, we wash them clean", "/images/mystic_river.jpg");
        
        Movie movie5 = new Movie("Space Odyssey", "Sci-Fi", 140, 
                "Journey beyond the stars", "/images/space_odyssey.jpg");
        
        Movie movie6 = new Movie("Dream Sequence", "Drama", 125, 
                "Reality is just a state of mind", "/images/dream_sequence.jpg");
        
        // Add to movies list
        movies.add(movie1);
        movies.add(movie2);
        movies.add(movie3);
        movies.add(movie4);
        movies.add(movie5);
        movies.add(movie6);
        
        // Set some as featured
        featuredMovies.add(movie3);
        featuredMovies.add(movie1);
        featuredMovies.add(movie4);
    }
    
    private void initializeUI() {
        // Set up the main frame
        frame = new JFrame("MovieHub - Book Movie Tickets Online");
        frame.setSize(1200, 800);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new BorderLayout());
        frame.getContentPane().setBackground(DARK_BG);
        
        // Create header panel
        createHeaderPanel();
        
        // Create main content panel
        createMainPanel();
        
        // Show the frame
        frame.setVisible(true);
    }
    
    private void createHeaderPanel() {
        headerPanel = new JPanel();
        headerPanel.setLayout(new BorderLayout());
        headerPanel.setBackground(HEADER_BG);
        headerPanel.setBorder(BorderFactory.createMatteBorder(0, 0, 1, 0, new Color(40, 40, 40)));
        
        // Logo panel (left side)
        JPanel logoPanel = new JPanel(new FlowLayout(FlowLayout.LEFT));
        logoPanel.setBackground(HEADER_BG);
        JLabel logoLabel = new JLabel("MovieHub");
        logoLabel.setFont(new Font("Arial", Font.BOLD, 24));
        logoLabel.setForeground(BLUE_ACCENT);
        logoPanel.add(logoLabel);
        
        // Navigation panel (center)
        JPanel navPanel = new JPanel(new FlowLayout(FlowLayout.CENTER, 20, 10));
        navPanel.setBackground(HEADER_BG);
        
        homeButton = createNavButton("Home");
        moviesButton = createNavButton("Movies");
        
        // Categories dropdown
        String[] categories = {"Categories", "Action", "Drama", "Comedy", "Sci-Fi", "Horror", "Thriller"};
        categoriesComboBox = new JComboBox<>(categories);
        categoriesComboBox.setFont(REGULAR_FONT);
        categoriesComboBox.setForeground(TEXT_COLOR);
        categoriesComboBox.setBackground(HEADER_BG);
        categoriesComboBox.setBorder(BorderFactory.createEmptyBorder());
        
        navPanel.add(homeButton);
        navPanel.add(moviesButton);
        navPanel.add(categoriesComboBox);
        
        // User panel (right side)
        JPanel userPanel = new JPanel(new FlowLayout(FlowLayout.RIGHT));
        userPanel.setBackground(HEADER_BG);
        
        searchButton = createIconButton("🔍");
        signInButton = new JButton("Sign in");
        styleButton(signInButton, DARK_BG);
        profileButton = createIconButton("👤");
        
        userPanel.add(searchButton);
        userPanel.add(profileButton);
        userPanel.add(signInButton);
        
        // Add components to header
        headerPanel.add(logoPanel, BorderLayout.WEST);
        headerPanel.add(navPanel, BorderLayout.CENTER);
        headerPanel.add(userPanel, BorderLayout.EAST);
        
        frame.add(headerPanel, BorderLayout.NORTH);
    }
    
    private JButton createNavButton(String text) {
        JButton button = new JButton(text);
        button.setFont(REGULAR_FONT);
        button.setForeground(TEXT_COLOR);
        button.setBackground(HEADER_BG);
        button.setBorder(BorderFactory.createEmptyBorder(5, 15, 5, 15));
        button.setFocusPainted(false);
        button.setCursor(new Cursor(Cursor.HAND_CURSOR));
        button.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if (text.equals("Movies")) {
                    cardLayout.show(cardsPanel, "moviesList");
                } else if (text.equals("Home")) {
                    cardLayout.show(cardsPanel, "featured");
                }
            }
        });
        return button;
    }
    
    private JButton createIconButton(String icon) {
        JButton button = new JButton(icon);
        button.setFont(new Font("Arial", Font.PLAIN, 16));
        button.setForeground(TEXT_COLOR);
        button.setBackground(HEADER_BG);
        button.setBorder(BorderFactory.createEmptyBorder(5, 15, 5, 15));
        button.setFocusPainted(false);
        button.setCursor(new Cursor(Cursor.HAND_CURSOR));
        return button;
    }
    
    private void styleButton(JButton button, Color bg) {
        button.setFont(REGULAR_FONT);
        button.setForeground(TEXT_COLOR);
        button.setBackground(bg);
        button.setBorder(BorderFactory.createEmptyBorder(5, 15, 5, 15));
        button.setFocusPainted(false);
        button.setCursor(new Cursor(Cursor.HAND_CURSOR));
    }
    
    private void createMainPanel() {
        mainPanel = new JPanel();
        mainPanel.setLayout(new BorderLayout());
        mainPanel.setBackground(DARK_BG);
        
        // Card layout for switching between views
        cardLayout = new CardLayout();
        cardsPanel = new JPanel(cardLayout);
        cardsPanel.setBackground(DARK_BG);
        
        // Create featured movies panel (homepage)
        createFeaturedPanel();
        
        // Create movies list panel
        createMoviesListPanel();
        
        // Add panels to card layout
        cardsPanel.add(featuredPanel, "featured");
        cardsPanel.add(movieListPanel, "moviesList");
        
        // Start with featured panel
        cardLayout.show(cardsPanel, "featured");
        
        mainPanel.add(cardsPanel, BorderLayout.CENTER);
        frame.add(mainPanel, BorderLayout.CENTER);
    }
    
    private void createFeaturedPanel() {
        featuredPanel = new JPanel();
        featuredPanel.setLayout(new BorderLayout());
        featuredPanel.setBackground(DARK_BG);
        
        // Create a slider panel for featured movies
        JPanel sliderPanel = new JPanel(new BorderLayout());
        sliderPanel.setBackground(DARK_BG);
        sliderPanel.setPreferredSize(new Dimension(1200, 400));
        
        // Display the first featured movie
        if (!featuredMovies.isEmpty()) {
            Movie featured = featuredMovies.get(0);
            
            JPanel featuredContent = new JPanel(new BorderLayout());
            featuredContent.setBackground(new Color(0, 0, 0, 150));
            
            JLabel featuredLabel = new JLabel("Featured");
            featuredLabel.setFont(SMALL_FONT);
            featuredLabel.setForeground(Color.WHITE);
            featuredLabel.setBorder(BorderFactory.createEmptyBorder(10, 20, 0, 0));
            
            JLabel titleLabel = new JLabel(featured.getTitle());
            titleLabel.setFont(new Font("Arial", Font.BOLD, 48));
            titleLabel.setForeground(Color.WHITE);
            titleLabel.setBorder(BorderFactory.createEmptyBorder(0, 20, 0, 0));
            
            JPanel infoPanel = new JPanel(new FlowLayout(FlowLayout.LEFT));
            infoPanel.setOpaque(false);
            
            JLabel genreLabel = new JLabel(featured.getGenre());
            genreLabel.setFont(REGULAR_FONT);
            genreLabel.setForeground(Color.WHITE);
            
            JLabel dateLabel = new JLabel("December 5, 2023");
            dateLabel.setFont(REGULAR_FONT);
            dateLabel.setForeground(Color.WHITE);
            
            infoPanel.add(genreLabel);
            infoPanel.add(new JLabel(" | "));
            infoPanel.add(dateLabel);
            
            JPanel buttonPanel = new JPanel(new FlowLayout(FlowLayout.LEFT));
            buttonPanel.setOpaque(false);
            buttonPanel.setBorder(BorderFactory.createEmptyBorder(10, 20, 20, 0));
            
            JButton bookButton = new JButton("Book Tickets");
            bookButton.setBackground(BLUE_ACCENT);
            bookButton.setForeground(Color.WHITE);
            bookButton.setFont(REGULAR_FONT);
            bookButton.setBorder(BorderFactory.createEmptyBorder(10, 20, 10, 20));
            bookButton.setCursor(new Cursor(Cursor.HAND_CURSOR));
            
            JButton detailsButton = new JButton("View Details");
            detailsButton.setBackground(new Color(0, 0, 0, 0));
            detailsButton.setForeground(Color.WHITE);
            detailsButton.setFont(REGULAR_FONT);
            detailsButton.setBorder(BorderFactory.createLineBorder(Color.WHITE));
            detailsButton.setBorder(BorderFactory.createCompoundBorder(
                    BorderFactory.createLineBorder(Color.WHITE),
                    BorderFactory.createEmptyBorder(9, 19, 9, 19)));
            detailsButton.setCursor(new Cursor(Cursor.HAND_CURSOR));
            
            buttonPanel.add(bookButton);
            buttonPanel.add(Box.createRigidArea(new Dimension(10, 0)));
            buttonPanel.add(detailsButton);
            
            JPanel contentWrapper = new JPanel(new BorderLayout());
            contentWrapper.setOpaque(false);
            contentWrapper.add(featuredLabel, BorderLayout.NORTH);
            contentWrapper.add(titleLabel, BorderLayout.CENTER);
            
            JPanel southPanel = new JPanel(new BorderLayout());
            southPanel.setOpaque(false);
            southPanel.add(infoPanel, BorderLayout.NORTH);
            southPanel.add(buttonPanel, BorderLayout.SOUTH);
            
            contentWrapper.add(southPanel, BorderLayout.SOUTH);
            
            featuredContent.add(contentWrapper, BorderLayout.CENTER);
            
            // Navigation arrows
            JPanel navPanel = new JPanel(new BorderLayout());
            navPanel.setOpaque(false);
            
            JButton prevButton = new JButton("<");
            prevButton.setFont(new Font("Arial", Font.BOLD, 24));
            prevButton.setForeground(Color.WHITE);
            prevButton.setBackground(new Color(0, 0, 0, 80));
            prevButton.setBorder(BorderFactory.createEmptyBorder(10, 15, 10, 15));
            prevButton.setFocusPainted(false);
            
            JButton nextButton = new JButton(">");
            nextButton.setFont(new Font("Arial", Font.BOLD, 24));
            nextButton.setForeground(Color.WHITE);
            nextButton.setBackground(new Color(0, 0, 0, 80));
            nextButton.setBorder(BorderFactory.createEmptyBorder(10, 15, 10, 15));
            nextButton.setFocusPainted(false);
            
            navPanel.add(prevButton, BorderLayout.WEST);
            navPanel.add(nextButton, BorderLayout.EAST);
            
            sliderPanel.add(featuredContent, BorderLayout.CENTER);
            sliderPanel.add(navPanel, BorderLayout.CENTER);
            
            // Slider indicators
            JPanel indicatorPanel = new JPanel(new FlowLayout(FlowLayout.CENTER));
            indicatorPanel.setBackground(DARK_BG);
            
            for (int i = 0; i < featuredMovies.size(); i++) {
                JPanel dot = new JPanel();
                dot.setPreferredSize(new Dimension(8, 8));
                dot.setBackground(i == 0 ? BLUE_ACCENT : Color.GRAY);
                dot.setBorder(BorderFactory.createEmptyBorder(0, 3, 0, 3));
                indicatorPanel.add(dot);
            }
            
            sliderPanel.add(indicatorPanel, BorderLayout.SOUTH);
        }
        
        featuredPanel.add(sliderPanel, BorderLayout.NORTH);
        
        // Add movies section to featured panel
        JPanel moviesSection = new JPanel(new BorderLayout());
        moviesSection.setBackground(DARK_BG);
        
        JPanel moviesTitlePanel = new JPanel(new BorderLayout());
        moviesTitlePanel.setBackground(DARK_BG);
        moviesTitlePanel.setBorder(BorderFactory.createEmptyBorder(20, 20, 10, 20));
        
        JLabel moviesLabel = new JLabel("Movies");
        moviesLabel.setFont(TITLE_FONT);
        moviesLabel.setForeground(TEXT_COLOR);
        
        JPanel filterPanel = new JPanel(new FlowLayout(FlowLayout.RIGHT));
        filterPanel.setBackground(DARK_BG);
        
        nowShowingButton = new JToggleButton("Now Showing");
        nowShowingButton.setSelected(true);
        nowShowingButton.setFont(SMALL_FONT);
        nowShowingButton.setForeground(Color.WHITE);
        nowShowingButton.setBackground(BLUE_ACCENT);
        nowShowingButton.setBorder(BorderFactory.createEmptyBorder(5, 15, 5, 15));
        
        comingSoonButton = new JToggleButton("Coming Soon");
        comingSoonButton.setFont(SMALL_FONT);
        comingSoonButton.setForeground(Color.WHITE);
        comingSoonButton.setBackground(new Color(60, 60, 70));
        comingSoonButton.setBorder(BorderFactory.createEmptyBorder(5, 15, 5, 15));
        
        ButtonGroup filterGroup = new ButtonGroup();
        filterGroup.add(nowShowingButton);
        filterGroup.add(comingSoonButton);
        
        filterPanel.add(nowShowingButton);
        filterPanel.add(comingSoonButton);
        
        moviesTitlePanel.add(moviesLabel, BorderLayout.WEST);
        moviesTitlePanel.add(filterPanel, BorderLayout.EAST);
        
        // Create a panel to hold movie cards
        JPanel movieCardsPanel = new JPanel(new GridLayout(1, 0, 15, 0));
        movieCardsPanel.setBackground(DARK_BG);
        movieCardsPanel.setBorder(BorderFactory.createEmptyBorder(10, 20, 20, 20));
        
        // Display 4 movies
        for (int i = 0; i < Math.min(4, movies.size()); i++) {
            movieCardsPanel.add(createMovieCard(movies.get(i)));
        }
        
        moviesSection.add(moviesTitlePanel, BorderLayout.NORTH);
        moviesSection.add(movieCardsPanel, BorderLayout.CENTER);
        
        featuredPanel.add(moviesSection, BorderLayout.CENTER);
    }
    
    private void createMoviesListPanel() {
        movieListPanel = new JPanel(new BorderLayout());
        movieListPanel.setBackground(DARK_BG);
        
        JPanel titlePanel = new JPanel(new BorderLayout());
        titlePanel.setBackground(DARK_BG);
        titlePanel.setBorder(BorderFactory.createEmptyBorder(20, 20, 10, 20));
        
        JLabel titleLabel = new JLabel("Movies");
        titleLabel.setFont(TITLE_FONT);
        titleLabel.setForeground(TEXT_COLOR);
        
        JPanel filterPanel = new JPanel(new FlowLayout(FlowLayout.RIGHT));
        filterPanel.setBackground(DARK_BG);
        
        JToggleButton nowShowingBtn = new JToggleButton("Now Showing");
        nowShowingBtn.setSelected(true);
        nowShowingBtn.setFont(SMALL_FONT);
        nowShowingBtn.setForeground(Color.WHITE);
        nowShowingBtn.setBackground(BLUE_ACCENT);
        nowShowingBtn.setBorder(BorderFactory.createEmptyBorder(5, 15, 5, 15));
        
        JToggleButton comingSoonBtn = new JToggleButton("Coming Soon");
        comingSoonBtn.setFont(SMALL_FONT);
        comingSoonBtn.setForeground(Color.WHITE);
        comingSoonBtn.setBackground(new Color(60, 60, 70));
        comingSoonBtn.setBorder(BorderFactory.createEmptyBorder(5, 15, 5, 15));
        
        ButtonGroup filterGroup = new ButtonGroup();
        filterGroup.add(nowShowingBtn);
        filterGroup.add(comingSoonBtn);
        
        filterPanel.add(nowShowingBtn);
        filterPanel.add(comingSoonBtn);
        
        titlePanel.add(titleLabel, BorderLayout.WEST);
        titlePanel.add(filterPanel, BorderLayout.EAST);
        
        // Create grid panel for movies
        JPanel moviesGridPanel = new JPanel(new GridLayout(0, 4, 15, 15));
        moviesGridPanel.setBackground(DARK_BG);
        moviesGridPanel.setBorder(BorderFactory.createEmptyBorder(10, 20, 20, 20));
        
        // Add all movies to the grid
        for (Movie movie : movies) {
            moviesGridPanel.add(createMovieCard(movie));
        }
        
        // Add to scroll pane
        JScrollPane scrollPane = new JScrollPane(moviesGridPanel);
        scrollPane.setVerticalScrollBarPolicy(JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED);
        scrollPane.setHorizontalScrollBarPolicy(JScrollPane.HORIZONTAL_SCROLLBAR_NEVER);
        scrollPane.setBorder(BorderFactory.createEmptyBorder());
        scrollPane.getVerticalScrollBar().setUnitIncrement(16);
        scrollPane.setBackground(DARK_BG);
        
        movieListPanel.add(titlePanel, BorderLayout.NORTH);
        movieListPanel.add(scrollPane, BorderLayout.CENTER);
    }
    
    private JPanel createMovieCard(Movie movie) {
        JPanel cardPanel = new JPanel(new BorderLayout());
        cardPanel.setBackground(CARD_BG);
        cardPanel.setBorder(BorderFactory.createLineBorder(new Color(50, 50, 60)));
        
        // Movie poster (using a placeholder)
        JPanel posterPanel = new JPanel();
        posterPanel.setBackground(new Color(40, 40, 50));
        posterPanel.setPreferredSize(new Dimension(0, 300));
        posterPanel.setBorder(BorderFactory.createMatteBorder(0, 0, 1, 0, new Color(50, 50, 60)));
        posterPanel.setLayout(new BorderLayout());
        
        // Movie info
        JPanel infoPanel = new JPanel();
        infoPanel.setLayout(new BoxLayout(infoPanel, BoxLayout.Y_AXIS));
        infoPanel.setBackground(CARD_BG);
        infoPanel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        
        JLabel titleLabel = new JLabel(movie.getTitle());
        titleLabel.setFont(HEADER_FONT);
        titleLabel.setForeground(TEXT_COLOR);
        titleLabel.setAlignmentX(Component.LEFT_ALIGNMENT);
        
        JPanel genrePanel = new JPanel(new FlowLayout(FlowLayout.LEFT, 0, 0));
        genrePanel.setBackground(CARD_BG);
        genrePanel.setBorder(BorderFactory.createEmptyBorder(5, 0, 5, 0));
        
        JLabel genreLabel = new JLabel(movie.getGenre());
        genreLabel.setFont(SMALL_FONT);
        genreLabel.setForeground(Color.WHITE);
        genreLabel.setBackground(new Color(60, 60, 70));
        genreLabel.setOpaque(true);
        genreLabel.setBorder(BorderFactory.createEmptyBorder(3, 8, 3, 8));
        
        genrePanel.add(genreLabel);
        
        JPanel durationPanel = new JPanel(new FlowLayout(FlowLayout.LEFT, 5, 0));
        durationPanel.setBackground(CARD_BG);
        
        JLabel clockIcon = new JLabel("⏱");
        clockIcon.setForeground(SECONDARY_TEXT);
        
        int hours = movie.getDurationMinutes() / 60;
        int minutes = movie.getDurationMinutes() % 60;
        JLabel durationLabel = new JLabel(hours + "h " + minutes + "m");
        durationLabel.setFont(SMALL_FONT);
        durationLabel.setForeground(SECONDARY_TEXT);
        
        durationPanel.add(clockIcon);
        durationPanel.add(durationLabel);
        
        infoPanel.add(titleLabel);
        infoPanel.add(genrePanel);
        infoPanel.add(durationPanel);
        
        cardPanel.add(posterPanel, BorderLayout.CENTER);
        cardPanel.add(infoPanel, BorderLayout.SOUTH);
        
        // Make the whole card clickable
        cardPanel.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                showMovieDetails(movie);
            }
            
            @Override
            public void mouseEntered(MouseEvent e) {
                cardPanel.setCursor(new Cursor(Cursor.HAND_CURSOR));
                cardPanel.setBorder(BorderFactory.createLineBorder(BLUE_ACCENT));
            }
            
            @Override
            public void mouseExited(MouseEvent e) {
                cardPanel.setBorder(BorderFactory.createLineBorder(new Color(50, 50, 60)));
            }
        });
        
        return cardPanel;
    }
    
    private void showMovieDetails(Movie movie) {
        // Create a dialog to show movie details
        JDialog detailsDialog = new JDialog(frame, "Movie Details", true);
        detailsDialog.setSize(800, 600);
        detailsDialog.setLocationRelativeTo(frame);
        detailsDialog.setLayout(new BorderLayout());
        detailsDialog.getContentPane().setBackground(DARK_BG);
        
        // Movie poster and details panel
        JPanel contentPanel = new JPanel(new BorderLayout());
        contentPanel.setBackground(DARK_BG);
        
        // Poster panel (left)
        JPanel posterPanel = new JPanel();
        posterPanel.setBackground(new Color(40, 40, 50));
        posterPanel.setPreferredSize(new Dimension(300, 0));
        
        // Details panel (right)
        JPanel detailsPanel = new JPanel();
        detailsPanel.setLayout(new BoxLayout(detailsPanel, BoxLayout.Y_AXIS));
        detailsPanel.setBackground(DARK_BG);
        detailsPanel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        
        JLabel titleLabel = new JLabel(movie.getTitle());
        titleLabel.setFont(new Font("Arial", Font.BOLD, 28));
        titleLabel.setForeground(TEXT_COLOR);
        titleLabel.setAlignmentX(Component.LEFT_ALIGNMENT);
        
        JPanel infoPanel = new JPanel(new FlowLayout(FlowLayout.LEFT));
        infoPanel.setBackground(DARK_BG);
        
        JLabel genreLabel = new JLabel(movie.getGenre());
        genreLabel.setFont(REGULAR_FONT);
        genreLabel.setForeground(TEXT_COLOR);
        
        JLabel durationLabel = new JLabel(movie.getDurationMinutes() / 60 + "h " + movie.getDurationMinutes() % 60 + "m");
        durationLabel.setFont(REGULAR_FONT);
        durationLabel.setForeground(TEXT_COLOR);
        
        JLabel releaseDateLabel = new JLabel("December 5, 2023");
        releaseDateLabel.setFont(REGULAR_FONT);
        releaseDateLabel.setForeground(TEXT_COLOR);
        
        infoPanel.add(genreLabel);
        infoPanel.add(new JLabel(" | "));
        infoPanel.add(durationLabel);
        infoPanel.add(new JLabel(" | "));
        infoPanel.add(releaseDateLabel);
        infoPanel.setAlignmentX(Component.LEFT_ALIGNMENT);
        
        JLabel descLabel = new JLabel("Description");
        descLabel.setFont(new Font("Arial", Font.BOLD, 18));
        descLabel.setForeground(TEXT_COLOR);
        descLabel.setAlignmentX(Component.LEFT_ALIGNMENT);
        descLabel.setBorder(BorderFactory.createEmptyBorder(20, 0, 10, 0));
        
        JTextArea descArea = new JTextArea(movie.getDescription() + 
                "\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
                "nisi ut aliquip ex ea commodo consequat.");
        descArea.setFont(REGULAR_FONT);
        descArea.setForeground(SECONDARY_TEXT);
        descArea.setBackground(DARK_BG);
        descArea.setWrapStyleWord(true);
        descArea.setLineWrap(true);
        descArea.setEditable(false);
        descArea.setAlignmentX(Component.LEFT_ALIGNMENT);
        
        // Button panel
        JPanel buttonPanel = new JPanel(new FlowLayout(FlowLayout.LEFT));
        buttonPanel.setBackground(DARK_BG);
        buttonPanel.setAlignmentX(Component.LEFT_ALIGNMENT);
        buttonPanel.setBorder(BorderFactory.createEmptyBorder(20, 0, 0, 0));
        
        JButton bookButton = new JButton("Book Tickets");
        bookButton.setBackground(BLUE_ACCENT);
        bookButton.setForeground(Color.WHITE);
        bookButton.setFont(REGULAR_FONT);
        bookButton.setBorder(BorderFactory.createEmptyBorder(10, 20, 10, 20));
        
        JButton closeButton = new JButton("Close");
        closeButton.setBackground(new Color(60, 60, 70));
        closeButton.setForeground(Color.WHITE);
        closeButton.setFont(REGULAR_FONT);
        closeButton.setBorder(BorderFactory.createEmptyBorder(10, 20, 10, 20));
        closeButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                detailsDialog.dispose();
            }
        });
        
        buttonPanel.add(bookButton);
        buttonPanel.add(Box.createRigidArea(new Dimension(10, 0)));
        buttonPanel.add(closeButton);
        
        detailsPanel.add(titleLabel);
        detailsPanel.add(Box.createRigidArea(new Dimension(0, 10)));
        detailsPanel.add(infoPanel);
        detailsPanel.add(descLabel);
        detailsPanel.add(descArea);
        detailsPanel.add(buttonPanel);
        
        contentPanel.add(posterPanel, BorderLayout.WEST);
        contentPanel.add(detailsPanel, BorderLayout.CENTER);
        
        detailsDialog.add(contentPanel);
        detailsDialog.setVisible(true);
    }
    
    public static void main(String[] args) {
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new MovieTicketBookingSystem();
            }
        });
    }
    
   // Movie class to store movie information
   class Movie {
    private String title;
    private String genre;
    private int durationMinutes;
    private String description;
    private String imagePath;
    private boolean nowShowing;
    
    public Movie(String title, String genre, int durationMinutes, String description, String imagePath) {
        this.title = title;
        this.genre = genre;
        this.durationMinutes = durationMinutes;
        this.description = description;
        this.imagePath = imagePath;
        this.nowShowing = true; // Default to now showing
    }
    
    public String getTitle() {
        return title;
    }
    
    public String getGenre() {
        return genre;
    }
    
    public int getDurationMinutes() {
        return durationMinutes;
    }
    
    public String getDescription() {
        return description;
    }
    
    public String getImagePath() {
        return imagePath;
    }
    
    public boolean isNowShowing() {
        return nowShowing;
    }
    
    public void setNowShowing(boolean nowShowing) {
        this.nowShowing = nowShowing;
    }
}

// Ticket booking functionality
public void bookTicket(Movie movie) {
    JDialog bookingDialog = new JDialog(frame, "Book Tickets - " + movie.getTitle(), true);
    bookingDialog.setSize(600, 700);
    bookingDialog.setLocationRelativeTo(frame);
    bookingDialog.setLayout(new BorderLayout());
    bookingDialog.getContentPane().setBackground(DARK_BG);
    
    // Booking form panel
    JPanel formPanel = new JPanel();
    formPanel.setLayout(new BoxLayout(formPanel, BoxLayout.Y_AXIS));
    formPanel.setBackground(DARK_BG);
    formPanel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
    
    JLabel titleLabel = new JLabel("Book Tickets for " + movie.getTitle());
    titleLabel.setFont(new Font("Arial", Font.BOLD, 24));
    titleLabel.setForeground(TEXT_COLOR);
    titleLabel.setAlignmentX(Component.LEFT_ALIGNMENT);
    
    // Date selection
    JLabel dateLabel = new JLabel("Select Date:");
    dateLabel.setFont(HEADER_FONT);
    dateLabel.setForeground(TEXT_COLOR);
    dateLabel.setAlignmentX(Component.LEFT_ALIGNMENT);
    dateLabel.setBorder(BorderFactory.createEmptyBorder(20, 0, 10, 0));
    
    JPanel datePanel = new JPanel(new FlowLayout(FlowLayout.LEFT));
    datePanel.setBackground(DARK_BG);
    datePanel.setAlignmentX(Component.LEFT_ALIGNMENT);
    
    // Get current date and next 6 days
    Calendar cal = Calendar.getInstance();
    SimpleDateFormat sdf = new SimpleDateFormat("EEE, MMM d");
    ButtonGroup dateGroup = new ButtonGroup();
    JToggleButton[] dateBtns = new JToggleButton[7];
    
    for (int i = 0; i < 7; i++) {
        String dateStr = sdf.format(cal.getTime());
        dateBtns[i] = new JToggleButton(dateStr);
        dateBtns[i].setFont(SMALL_FONT);
        dateBtns[i].setForeground(TEXT_COLOR);
        dateBtns[i].setBackground(i == 0 ? BLUE_ACCENT : new Color(60, 60, 70));
        dateBtns[i].setBorder(BorderFactory.createEmptyBorder(8, 15, 8, 15));
        dateBtns[i].setSelected(i == 0);
        dateGroup.add(dateBtns[i]);
        datePanel.add(dateBtns[i]);
        cal.add(Calendar.DAY_OF_MONTH, 1);
    }
    
    // Showtime selection
    JLabel timeLabel = new JLabel("Select Showtime:");
    timeLabel.setFont(HEADER_FONT);
    timeLabel.setForeground(TEXT_COLOR);
    timeLabel.setAlignmentX(Component.LEFT_ALIGNMENT);
    timeLabel.setBorder(BorderFactory.createEmptyBorder(20, 0, 10, 0));
    
    JPanel timePanel = new JPanel(new FlowLayout(FlowLayout.LEFT));
    timePanel.setBackground(DARK_BG);
    timePanel.setAlignmentX(Component.LEFT_ALIGNMENT);
    
    String[] times = {"10:30 AM", "1:15 PM", "4:00 PM", "7:30 PM", "10:15 PM"};
    ButtonGroup timeGroup = new ButtonGroup();
    JToggleButton[] timeBtns = new JToggleButton[times.length];
    
    for (int i = 0; i < times.length; i++) {
        timeBtns[i] = new JToggleButton(times[i]);
        timeBtns[i].setFont(SMALL_FONT);
        timeBtns[i].setForeground(TEXT_COLOR);
        timeBtns[i].setBackground(new Color(60, 60, 70));
        timeBtns[i].setBorder(BorderFactory.createEmptyBorder(8, 15, 8, 15));
        timeGroup.add(timeBtns[i]);
        timePanel.add(timeBtns[i]);
    }
    
    // Number of tickets
    JLabel ticketsLabel = new JLabel("Number of Tickets:");
    ticketsLabel.setFont(HEADER_FONT);
    ticketsLabel.setForeground(TEXT_COLOR);
    ticketsLabel.setAlignmentX(Component.LEFT_ALIGNMENT);
    ticketsLabel.setBorder(BorderFactory.createEmptyBorder(20, 0, 10, 0));
    
    JPanel ticketsPanel = new JPanel(new FlowLayout(FlowLayout.LEFT));
    ticketsPanel.setBackground(DARK_BG);
    ticketsPanel.setAlignmentX(Component.LEFT_ALIGNMENT);
    
    JSpinner ticketsSpinner = new JSpinner(new SpinnerNumberModel(2, 1, 10, 1));
    ticketsSpinner.setPreferredSize(new Dimension(80, 30));
    ticketsSpinner.setFont(REGULAR_FONT);
    ticketsSpinner.setBackground(new Color(60, 60, 70));
    
    ticketsPanel.add(ticketsSpinner);
    
    // Seat selection visual
    JLabel seatsLabel = new JLabel("Select Seats:");
    seatsLabel.setFont(HEADER_FONT);
    seatsLabel.setForeground(TEXT_COLOR);
    seatsLabel.setAlignmentX(Component.LEFT_ALIGNMENT);
    seatsLabel.setBorder(BorderFactory.createEmptyBorder(20, 0, 10, 0));
    
    JPanel seatGrid = new JPanel(new GridLayout(6, 10, 5, 5));
    seatGrid.setBackground(DARK_BG);
    seatGrid.setAlignmentX(Component.LEFT_ALIGNMENT);
    seatGrid.setBorder(BorderFactory.createEmptyBorder(0, 0, 10, 0));
    
    JToggleButton[][] seats = new JToggleButton[6][10];
    
    // Create seat grid
    for (int i = 0; i < 6; i++) {
        for (int j = 0; j < 10; j++) {
            seats[i][j] = new JToggleButton();
            seats[i][j].setPreferredSize(new Dimension(30, 30));
            
            // Some random seats already taken
            boolean taken = Math.random() < 0.2;
            
            if (taken) {
                seats[i][j].setBackground(Color.GRAY);
                seats[i][j].setEnabled(false);
            } else {
                seats[i][j].setBackground(new Color(60, 60, 70));
                seats[i][j].addActionListener(new ActionListener() {
                    @Override
                    public void actionPerformed(ActionEvent e) {
                        JToggleButton btn = (JToggleButton) e.getSource();
                        btn.setBackground(btn.isSelected() ? BLUE_ACCENT : new Color(60, 60, 70));
                    }
                });
            }
            
            seatGrid.add(seats[i][j]);
        }
    }
    
    JPanel screenPanel = new JPanel();
    screenPanel.setBackground(new Color(100, 100, 100));
    screenPanel.setPreferredSize(new Dimension(400, 15));
    screenPanel.setBorder(BorderFactory.createEmptyBorder(5, 0, 5, 0));
    
    JLabel screenLabel = new JLabel("SCREEN");
    screenLabel.setFont(new Font("Arial", Font.PLAIN, 10));
    screenLabel.setForeground(Color.BLACK);
    screenPanel.add(screenLabel);
    
    JPanel seatLegend = new JPanel(new FlowLayout(FlowLayout.LEFT));
    seatLegend.setBackground(DARK_BG);
    seatLegend.setAlignmentX(Component.LEFT_ALIGNMENT);
    
    JPanel availPanel = new JPanel();
    availPanel.setBackground(new Color(60, 60, 70));
    availPanel.setPreferredSize(new Dimension(15, 15));
    JLabel availLabel = new JLabel(" Available");
    availLabel.setFont(SMALL_FONT);
    availLabel.setForeground(SECONDARY_TEXT);
    
    JPanel selPanel = new JPanel();
    selPanel.setBackground(BLUE_ACCENT);
    selPanel.setPreferredSize(new Dimension(15, 15));
    JLabel selLabel = new JLabel(" Selected");
    selLabel.setFont(SMALL_FONT);
    selLabel.setForeground(SECONDARY_TEXT);
    
    JPanel takenPanel = new JPanel();
    takenPanel.setBackground(Color.GRAY);
    takenPanel.setPreferredSize(new Dimension(15, 15));
    JLabel takenLabel = new JLabel(" Taken");
    takenLabel.setFont(SMALL_FONT);
    takenLabel.setForeground(SECONDARY_TEXT);
    
    seatLegend.add(availPanel);
    seatLegend.add(availLabel);
    seatLegend.add(Box.createRigidArea(new Dimension(10, 0)));
    seatLegend.add(selPanel);
    seatLegend.add(selLabel);
    seatLegend.add(Box.createRigidArea(new Dimension(10, 0)));
    seatLegend.add(takenPanel);
    seatLegend.add(takenLabel);
    
    // Payment summary
    JLabel summaryLabel = new JLabel("Payment Summary:");
    summaryLabel.setFont(HEADER_FONT);
    summaryLabel.setForeground(TEXT_COLOR);
    summaryLabel.setAlignmentX(Component.LEFT_ALIGNMENT);
    summaryLabel.setBorder(BorderFactory.createEmptyBorder(20, 0, 10, 0));
    
    JPanel summaryPanel = new JPanel(new GridLayout(4, 2, 5, 5));
    summaryPanel.setBackground(new Color(40, 40, 50));
    summaryPanel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
    summaryPanel.setAlignmentX(Component.LEFT_ALIGNMENT);
    
    JLabel ticketPriceLabel = new JLabel("Ticket Price:");
    ticketPriceLabel.setFont(REGULAR_FONT);
    ticketPriceLabel.setForeground(SECONDARY_TEXT);
    
    JLabel ticketPriceValue = new JLabel("$12.00 x 2");
    ticketPriceValue.setFont(REGULAR_FONT);
    ticketPriceValue.setForeground(TEXT_COLOR);
    ticketPriceValue.setHorizontalAlignment(JLabel.RIGHT);
    
    JLabel subtotalLabel = new JLabel("Subtotal:");
    subtotalLabel.setFont(REGULAR_FONT);
    subtotalLabel.setForeground(SECONDARY_TEXT);
    
    JLabel subtotalValue = new JLabel("$24.00");
    subtotalValue.setFont(REGULAR_FONT);
    subtotalValue.setForeground(TEXT_COLOR);
    subtotalValue.setHorizontalAlignment(JLabel.RIGHT);
    
    JLabel taxLabel = new JLabel("Tax (7%):");
    taxLabel.setFont(REGULAR_FONT);
    taxLabel.setForeground(SECONDARY_TEXT);
    
    JLabel taxValue = new JLabel("$1.68");
    taxValue.setFont(REGULAR_FONT);
    taxValue.setForeground(TEXT_COLOR);
    taxValue.setHorizontalAlignment(JLabel.RIGHT);
    
    JLabel totalLabel = new JLabel("Total:");
    totalLabel.setFont(new Font("Arial", Font.BOLD, 16));
    totalLabel.setForeground(TEXT_COLOR);
    
    JLabel totalValue = new JLabel("$25.68");
    totalValue.setFont(new Font("Arial", Font.BOLD, 16));
    totalValue.setForeground(TEXT_COLOR);
    totalValue.setHorizontalAlignment(JLabel.RIGHT);
    
    summaryPanel.add(ticketPriceLabel);
    summaryPanel.add(ticketPriceValue);
    summaryPanel.add(subtotalLabel);
    summaryPanel.add(subtotalValue);
    summaryPanel.add(taxLabel);
    summaryPanel.add(taxValue);
    summaryPanel.add(totalLabel);
    summaryPanel.add(totalValue);
    
    // Button panel
    JPanel buttonPanel = new JPanel(new FlowLayout(FlowLayout.RIGHT));
    buttonPanel.setBackground(DARK_BG);
    buttonPanel.setAlignmentX(Component.LEFT_ALIGNMENT);
    buttonPanel.setBorder(BorderFactory.createEmptyBorder(20, 0, 0, 0));
    
    JButton cancelButton = new JButton("Cancel");
    cancelButton.setBackground(new Color(60, 60, 70));
    cancelButton.setForeground(Color.WHITE);
    cancelButton.setFont(REGULAR_FONT);
    cancelButton.setBorder(BorderFactory.createEmptyBorder(10, 20, 10, 20));
    cancelButton.addActionListener(new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent e) {
            bookingDialog.dispose();
        }
    });
    
    JButton payButton = new JButton("Proceed to Payment");
    payButton.setBackground(BLUE_ACCENT);
    payButton.setForeground(Color.WHITE);
    payButton.setFont(REGULAR_FONT);
    payButton.setBorder(BorderFactory.createEmptyBorder(10, 20, 10, 20));
    payButton.addActionListener(new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent e) {
            showPaymentDialog(movie, bookingDialog);
        }
    });
    
    buttonPanel.add(cancelButton);
    buttonPanel.add(Box.createRigidArea(new Dimension(10, 0)));
    buttonPanel.add(payButton);
    
    // Add all components to form panel
    formPanel.add(titleLabel);
    formPanel.add(dateLabel);
    formPanel.add(datePanel);
    formPanel.add(timeLabel);
    formPanel.add(timePanel);
    formPanel.add(ticketsLabel);
    formPanel.add(ticketsPanel);
    formPanel.add(seatsLabel);
    formPanel.add(screenPanel);
    formPanel.add(Box.createRigidArea(new Dimension(0, 10)));
    formPanel.add(seatGrid);
    formPanel.add(seatLegend);
    formPanel.add(summaryLabel);
    formPanel.add(summaryPanel);
    formPanel.add(buttonPanel);
    
    // Add to scroll pane
    JScrollPane scrollPane = new JScrollPane(formPanel);
    scrollPane.setVerticalScrollBarPolicy(JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED);
    scrollPane.setBorder(BorderFactory.createEmptyBorder());
    scrollPane.getVerticalScrollBar().setUnitIncrement(16);
    
    bookingDialog.add(scrollPane);
    bookingDialog.setVisible(true);
}

private void showPaymentDialog(Movie movie, JDialog parentDialog) {
    JDialog paymentDialog = new JDialog(frame, "Payment - " + movie.getTitle(), true);
    paymentDialog.setSize(500, 550);
    paymentDialog.setLocationRelativeTo(frame);
    paymentDialog.setLayout(new BorderLayout());
    paymentDialog.getContentPane().setBackground(DARK_BG);
    
    JPanel formPanel = new JPanel();
    formPanel.setLayout(new BoxLayout(formPanel, BoxLayout.Y_AXIS));
    formPanel.setBackground(DARK_BG);
    formPanel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
    
    JLabel titleLabel = new JLabel("Payment Details");
    titleLabel.setFont(new Font("Arial", Font.BOLD, 24));
    titleLabel.setForeground(TEXT_COLOR);
    titleLabel.setAlignmentX(Component.LEFT_ALIGNMENT);
    
    // Card details
    JLabel cardLabel = new JLabel("Card Information:");
    cardLabel.setFont(HEADER_FONT);
    cardLabel.setForeground(TEXT_COLOR);
    cardLabel.setAlignmentX(Component.LEFT_ALIGNMENT);
    cardLabel.setBorder(BorderFactory.createEmptyBorder(20, 0, 10, 0));
    
    JTextField cardNumberField = new JTextField("•••• •••• •••• ••••");
    cardNumberField.setFont(REGULAR_FONT);
    cardNumberField.setForeground(TEXT_COLOR);
    cardNumberField.setBackground(new Color(60, 60, 70));
    cardNumberField.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(80, 80, 90)),
            BorderFactory.createEmptyBorder(10, 10, 10, 10)));
    cardNumberField.setAlignmentX(Component.LEFT_ALIGNMENT);
    cardNumberField.setMaximumSize(new Dimension(Integer.MAX_VALUE, 40));
    
    JPanel expiryPanel = new JPanel(new FlowLayout(FlowLayout.LEFT, 10, 0));
    expiryPanel.setBackground(DARK_BG);
    expiryPanel.setAlignmentX(Component.LEFT_ALIGNMENT);
    expiryPanel.setBorder(BorderFactory.createEmptyBorder(10, 0, 0, 0));
    
    JTextField expiryField = new JTextField("MM/YY");
    expiryField.setFont(REGULAR_FONT);
    expiryField.setForeground(TEXT_COLOR);
    expiryField.setBackground(new Color(60, 60, 70));
    expiryField.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(80, 80, 90)),
            BorderFactory.createEmptyBorder(10, 10, 10, 10)));
    expiryField.setPreferredSize(new Dimension(120, 40));
    
    JTextField cvvField = new JTextField("CVV");
    cvvField.setFont(REGULAR_FONT);
    cvvField.setForeground(TEXT_COLOR);
    cvvField.setBackground(new Color(60, 60, 70));
    cvvField.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(80, 80, 90)),
            BorderFactory.createEmptyBorder(10, 10, 10, 10)));
    cvvField.setPreferredSize(new Dimension(70, 40));
    
    expiryPanel.add(expiryField);
    expiryPanel.add(cvvField);
    
    JTextField nameField = new JTextField("Cardholder Name");
    nameField.setFont(REGULAR_FONT);
    nameField.setForeground(TEXT_COLOR);
    nameField.setBackground(new Color(60, 60, 70));
    nameField.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(80, 80, 90)),
            BorderFactory.createEmptyBorder(10, 10, 10, 10)));
    nameField.setAlignmentX(Component.LEFT_ALIGNMENT);
    nameField.setMaximumSize(new Dimension(Integer.MAX_VALUE, 40));
    nameField.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(80, 80, 90)),
            BorderFactory.createEmptyBorder(10, 10, 10, 10)));
    
    // Billing Address
    JLabel billingLabel = new JLabel("Billing Address:");
    billingLabel.setFont(HEADER_FONT);
    billingLabel.setForeground(TEXT_COLOR);
    billingLabel.setAlignmentX(Component.LEFT_ALIGNMENT);
    billingLabel.setBorder(BorderFactory.createEmptyBorder(20, 0, 10, 0));
    
    JTextField addressField = new JTextField("Street Address");
    addressField.setFont(REGULAR_FONT);
    addressField.setForeground(TEXT_COLOR);
    addressField.setBackground(new Color(60, 60, 70));
    addressField.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(80, 80, 90)),
            BorderFactory.createEmptyBorder(10, 10, 10, 10)));
    addressField.setAlignmentX(Component.LEFT_ALIGNMENT);
    addressField.setMaximumSize(new Dimension(Integer.MAX_VALUE, 40));
    
    JPanel cityZipPanel = new JPanel(new FlowLayout(FlowLayout.LEFT, 10, 0));
    cityZipPanel.setBackground(DARK_BG);
    cityZipPanel.setAlignmentX(Component.LEFT_ALIGNMENT);
    cityZipPanel.setBorder(BorderFactory.createEmptyBorder(10, 0, 0, 0));
    
    JTextField cityField = new JTextField("City");
    cityField.setFont(REGULAR_FONT);
    cityField.setForeground(TEXT_COLOR);
    cityField.setBackground(new Color(60, 60, 70));
    cityField.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(80, 80, 90)),
            BorderFactory.createEmptyBorder(10, 10, 10, 10)));
    cityField.setPreferredSize(new Dimension(150, 40));
    
    JTextField zipField = new JTextField("ZIP");
    zipField.setFont(REGULAR_FONT);
    zipField.setForeground(TEXT_COLOR);
    zipField.setBackground(new Color(60, 60, 70));
    zipField.setBorder(BorderFactory.createCompoundBorder(
            BorderFactory.createLineBorder(new Color(80, 80, 90)),
            BorderFactory.createEmptyBorder(10, 10, 10, 10)));
    zipField.setPreferredSize(new Dimension(100, 40));
    
    cityZipPanel.add(cityField);
    cityZipPanel.add(zipField);
    
    // Summary
    JLabel summaryLabel = new JLabel("Payment Summary:");
    summaryLabel.setFont(HEADER_FONT);
    summaryLabel.setForeground(TEXT_COLOR);
    summaryLabel.setAlignmentX(Component.LEFT_ALIGNMENT);
    summaryLabel.setBorder(BorderFactory.createEmptyBorder(20, 0, 10, 0));
    
    JPanel summaryPanel = new JPanel(new GridLayout(1, 2, 5, 5));
    summaryPanel.setBackground(new Color(40, 40, 50));
    summaryPanel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
    summaryPanel.setAlignmentX(Component.LEFT_ALIGNMENT);
    
    JLabel totalLabel = new JLabel("Total:");
    totalLabel.setFont(new Font("Arial", Font.BOLD, 16));
    totalLabel.setForeground(TEXT_COLOR);
    
    JLabel totalValue = new JLabel("$25.68");
    totalValue.setFont(new Font("Arial", Font.BOLD, 16));
    totalValue.setForeground(TEXT_COLOR);
    totalValue.setHorizontalAlignment(JLabel.RIGHT);
    
    summaryPanel.add(totalLabel);
    summaryPanel.add(totalValue);
    
    // Button panel
    JPanel buttonPanel = new JPanel(new FlowLayout(FlowLayout.RIGHT));
    buttonPanel.setBackground(DARK_BG);
    buttonPanel.setAlignmentX(Component.LEFT_ALIGNMENT);
    buttonPanel.setBorder(BorderFactory.createEmptyBorder(20, 0, 0, 0));
    
    JButton backButton = new JButton("Back");
    backButton.setBackground(new Color(60, 60, 70));
    backButton.setForeground(Color.WHITE);
    backButton.setFont(REGULAR_FONT);
    backButton.setBorder(BorderFactory.createEmptyBorder(10, 20, 10, 20));
    backButton.addActionListener(new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent e) {
            paymentDialog.dispose();
        }
    });
    
    JButton payButton = new JButton("Complete Payment");
    payButton.setBackground(BLUE_ACCENT);
    payButton.setForeground(Color.WHITE);
    payButton.setFont(REGULAR_FONT);
    payButton.setBorder(BorderFactory.createEmptyBorder(10, 20, 10, 20));
    payButton.addActionListener(new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent e) {
            JOptionPane.showMessageDialog(
                paymentDialog,
                "Payment successful! Your tickets have been booked.\n" +
                "A confirmation has been sent to your email.",
                "Booking Confirmed",
                JOptionPane.INFORMATION_MESSAGE
            );
            paymentDialog.dispose();
            parentDialog.dispose();
        }
    });
    
    buttonPanel.add(backButton);
    buttonPanel.add(Box.createRigidArea(new Dimension(10, 0)));
    buttonPanel.add(payButton);
    
    // Add all components
    formPanel.add(titleLabel);
    formPanel.add(cardLabel);
    formPanel.add(cardNumberField);
    formPanel.add(expiryPanel);
    formPanel.add(Box.createRigidArea(new Dimension(0, 10)));
    formPanel.add(nameField);
    formPanel.add(billingLabel);
    formPanel.add(addressField);
    formPanel.add(cityZipPanel);
    formPanel.add(summaryLabel);
    formPanel.add(summaryPanel);
    formPanel.add(buttonPanel);
    
    paymentDialog.add(formPanel);
    paymentDialog.setVisible(true);
}
}