require 'erb'
ERB.new(File.open(ARGV[0]).read).run
