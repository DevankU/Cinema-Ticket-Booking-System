// Backend.java
import java.util.*;
import java.io.*;
import java.text.SimpleDateFormat;

public class CineHubBackend {
    // Data structures to store information
    private Map<String, Movie> movies;
    private Map<String, Theatre> theatres;
    private List<Booking> bookings;
    private Set<String> bookedSeats;  // Format: movieId_theatreId_date_time_seatId
    
    // For generating unique IDs
    private int bookingIdCounter;
    
    public CineHubBackend() {
        // Initialize data structures
        movies = new HashMap<>();
        theatres = new HashMap<>();
        bookings = new ArrayList<>();
        bookedSeats = new HashSet<>();
        bookingIdCounter = 1000;
        
        // Initialize with sample data
        initSampleData();
    }
    
    private void initSampleData() {
        // Add sample movies
        addMovie("MOV001", "The Dark Knight Returns", "Action, Drama", "Christopher Nolan", 
                "Batman returns after 8 years to save Gotham from Bane's terror", 165, "R", 
                "https://example.com/dark-knight-returns.jpg");
        
        addMovie("MOV002", "Inception", "Sci-Fi, Action", "Christopher Nolan", 
                "A thief who steals corporate secrets through dream-sharing technology", 148, "PG-13", 
                "https://example.com/inception.jpg");
        
        addMovie("MOV003", "The Shawshank Redemption", "Drama", "Frank Darabont", 
                "Two imprisoned men bond over a number of years", 142, "R", 
                "https://example.com/shawshank.jpg");
        
        // Add sample theatres
        addTheatre("TH001", "CineHub Theatre 1", "123 Main St, Mumbai", 
                   "AC, Dolby Atmos, Premium Seating", 150);
        
        addTheatre("TH002", "CineHub Theatre 2", "456 Park Avenue, Delhi", 
                   "IMAX, 3D, Recliner Seats", 120);
        
        // Add show timings
        String[] times = {"10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM"};
        
        // Get current date and format it
        Calendar calendar = Calendar.getInstance();
        SimpleDateFormat dateFormat = new SimpleDateFormat("EEEE, MMMM d, yyyy");
        
        // Add shows for the next 7 days
        for (int i = 0; i < 7; i++) {
            String date = dateFormat.format(calendar.getTime());
            
            // Add shows for each theatre and movie
            for (Movie movie : movies.values()) {
                for (Theatre theatre : theatres.values()) {
                    for (String time : times) {
                        // Add show for this combination
                        addShow(movie.getId(), theatre.getId(), date, time);
                    }
                }
            }
            
            // Move to next day
            calendar.add(Calendar.DAY_OF_MONTH, 1);
        }
        
        // Add some random bookings and mark seats as booked
        String[] randomSeats = {"A5", "A6", "B7", "B8", "C3", "C4", "D9", "D10", "E1", "E2"};
        for (String seat : randomSeats) {
            bookedSeats.add("MOV001_TH001_Monday, April 21, 2025_7:00 PM_" + seat);
        }
    }
    
    // Movie methods
    public void addMovie(String id, String title, String genre, String director, 
                        String description, int duration, String rating, String posterUrl) {
        Movie movie = new Movie(id, title, genre, director, description, duration, rating, posterUrl);
        movies.put(id, movie);
    }
    public Movie getMovie(String id) {
        return movies.get(id);
    }
    
    public List<Movie> getAllMovies() {
        return new ArrayList<>(movies.values());
    }
    
    public List<Movie> searchMovies(String keyword) {
        List<Movie> results = new ArrayList<>();
        keyword = keyword.toLowerCase();
        
        for (Movie movie : movies.values()) {
            if (movie.getTitle().toLowerCase().contains(keyword) || 
                movie.getGenre().toLowerCase().contains(keyword) ||
                movie.getDescription().toLowerCase().contains(keyword)) {
                results.add(movie);
            }
        }
        
        return results;
    }
    
    // Theatre methods
    public void addTheatre(String id, String name, String location, String amenities, int capacity) {
        Theatre theatre = new Theatre(id, name, location, amenities, capacity);
        theatres.put(id, theatre);
    }
    
    public Theatre getTheatre(String id) {
        return theatres.get(id);
    }
    
    public List<Theatre> getAllTheatres() {
        return new ArrayList<>(theatres.values());
    }
    
    // Show methods
    public void addShow(String movieId, String theatreId, String date, String time) {
        Movie movie = movies.get(movieId);
        Theatre theatre = theatres.get(theatreId);
        
        if (movie != null && theatre != null) {
            Show show = new Show(movie, theatre, date, time);
            movie.addShow(show);
            theatre.addShow(show);
        }
    }
    
    public List<Show> getShowsByMovie(String movieId) {
        Movie movie = movies.get(movieId);
        return movie != null ? movie.getShows() : new ArrayList<>();
    }
    
    public List<Show> getShowsByTheatre(String theatreId) {
        Theatre theatre = theatres.get(theatreId);
        return theatre != null ? theatre.getShows() : new ArrayList<>();
    }
    
    public List<Show> getShowsByMovieAndDate(String movieId, String date) {
        List<Show> allShows = getShowsByMovie(movieId);
        List<Show> filteredShows = new ArrayList<>();
        
        for (Show show : allShows) {
            if (show.getDate().equals(date)) {
                filteredShows.add(show);
            }
        }
        
        return filteredShows;
    }
    
    // Booking methods
    public boolean createBooking(String movieTitle, String theatreName, String date, String time, 
                              List<String> seatIds, double amount) {
        try {
            // Find movie and theatre IDs
            String movieId = null;
            String theatreId = null;
            
            for (Movie movie : movies.values()) {
                if (movie.getTitle().equals(movieTitle)) {
                    movieId = movie.getId();
                    break;
                }
            }
            
            for (Theatre theatre : theatres.values()) {
                if (theatre.getName().equals(theatreName)) {
                    theatreId = theatre.getId();
                    break;
                }
            }
            
            if (movieId == null || theatreId == null) {
                return false;
            }
            
            // Check if all seats are available
            for (String seatId : seatIds) {
                String key = movieId + "_" + theatreId + "_" + date + "_" + time + "_" + seatId;
                if (bookedSeats.contains(key)) {
                    return false; // Seat already booked
                }
            }
            
            // Generate new booking ID
            String bookingId = "BK" + bookingIdCounter++;
            
            // Create booking
            Booking booking = new Booking(bookingId, movieId, theatreId, date, time, seatIds, amount);
            bookings.add(booking);
            
            // Mark seats as booked
            for (String seatId : seatIds) {
                String key = movieId + "_" + theatreId + "_" + date + "_" + time + "_" + seatId;
                bookedSeats.add(key);
            }
            
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
    
    public Booking getBooking(String bookingId) {
        for (Booking booking : bookings) {
            if (booking.getId().equals(bookingId)) {
                return booking;
            }
        }
        return null;
    }
    
    public List<Booking> getBookingsByMovie(String movieId) {
        List<Booking> result = new ArrayList<>();
        for (Booking booking : bookings) {
            if (booking.getMovieId().equals(movieId)) {
                result.add(booking);
            }
        }
        return result;
    }
    
    public List<Booking> getBookingsByTheatre(String theatreId) {
        List<Booking> result = new ArrayList<>();
        for (Booking booking : bookings) {
            if (booking.getTheatreId().equals(theatreId)) {
                result.add(booking);
            }
        }
        return result;
    }
    
    // Seat availability methods
    public Set<String> getBookedSeats(String movieTitle, String theatreName, String date, String time) {
        String movieId = null;
        String theatreId = null;
        
        for (Movie movie : movies.values()) {
            if (movie.getTitle().equals(movieTitle)) {
                movieId = movie.getId();
                break;
            }
        }
        
        for (Theatre theatre : theatres.values()) {
            if (theatre.getName().equals(theatreName)) {
                theatreId = theatre.getId();
                break;
            }
        }
        
        if (movieId == null || theatreId == null) {
            return new HashSet<>();
        }
        
        String prefix = movieId + "_" + theatreId + "_" + date + "_" + time + "_";
        Set<String> results = new HashSet<>();
        
        for (String bookedSeat : bookedSeats) {
            if (bookedSeat.startsWith(prefix)) {
                String seatId = bookedSeat.substring(prefix.length());
                results.add(seatId);
            }
        }
        
        return results;
    }
}

// Model classes
class Movie {
    private String id;
    private String title;
    private String genre;
    private String director;
    private String description;
    private int duration; // in minutes
    private String rating;
    private String posterUrl;
    private List<Show> shows;
    
    public Movie(String id, String title, String genre, String director, 
                String description, int duration, String rating, String posterUrl) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.director = director;
        this.description = description;
        this.duration = duration;
        this.rating = rating;
        this.posterUrl = posterUrl;
        this.shows = new ArrayList<>();
    }
    
    public String getId() { return id; }
    public String getTitle() { return title; }
    public String getGenre() { return genre; }
    public String getDirector() { return director; }
    public String getDescription() { return description; }
    public int getDuration() { return duration; }
    public String getRating() { return rating; }
    public String getPosterUrl() { return posterUrl; }
    
    public List<Show> getShows() { return shows; }
    public void addShow(Show show) { shows.add(show); }
}

class Theatre {
    private String id;
    private String name;
    private String location;
    private String amenities;
    private int capacity;
    private List<Show> shows;
    
    public Theatre(String id, String name, String location, String amenities, int capacity) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.amenities = amenities;
        this.capacity = capacity;
        this.shows = new ArrayList<>();
    }
    
    public String getId() { return id; }
    public String getName() { return name; }
    public String getLocation() { return location; }
    public String getAmenities() { return amenities; }
    public int getCapacity() { return capacity; }
    
    public List<Show> getShows() { return shows; }
    public void addShow(Show show) { shows.add(show); }
}

class Show {
    private Movie movie;
    private Theatre theatre;
    private String date;
    private String time;
    
    public Show(Movie movie, Theatre theatre, String date, String time) {
        this.movie = movie;
        this.theatre = theatre;
        this.date = date;
        this.time = time;
    }
    
    public Movie getMovie() { return movie; }
    public Theatre getTheatre() { return theatre; }
    public String getDate() { return date; }
    public String getTime() { return time; }
}

class Booking {
    private String id;
    private String movieId;
    private String theatreId;
    private String date;
    private String time;
    private List<String> seatIds;
    private double amount;
    private String timestamp;
    
    public Booking(String id, String movieId, String theatreId, String date, String time, 
                  List<String> seatIds, double amount) {
        this.id = id;
        this.movieId = movieId;
        this.theatreId = theatreId;
        this.date = date;
        this.time = time;
        this.seatIds = new ArrayList<>(seatIds);
        this.amount = amount;
        this.timestamp = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
    }
    
    public String getId() { return id; }
    public String getMovieId() { return movieId; }
    public String getTheatreId() { return theatreId; }
    public String getDate() { return date; }
    public String getTime() { return time; }
    public List<String> getSeatIds() { return seatIds; }
    public double getAmount() { return amount; }
    public String getTimestamp() { return timestamp; }
}